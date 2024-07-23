(async () => {
    const { Octokit } = await import("@octokit/core");
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const title = process.env.PR_TITLE;
    const regex = /\[(.*-)?([^-]+)-([^\]]+)\]/;
    const match = title.match(regex);
    if (match) {
        const combinedString = `${match[2]}-${match[3]}`;
        octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
            owner: '${{ github.repository_owner }}',
            repo: '${{ github.event.repository.name }}',
            pull_number: process.env.PR_NUMBER
        }).then(({ data }) => {
            let description = data.body.replace('GEC-XXX', combinedString);
            return octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
                owner: '${{ github.repository_owner }}',
                repo: '${{ github.event.repository.name }}',
                pull_number: process.env.PR_NUMBER,
                body: description
            })
        }).then(() => console.log("successful!!!")).catch(err => console.error("failed"))
    } else {
        console.log("No match")
    }
})();