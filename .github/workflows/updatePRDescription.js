(async () => {
    const { Octokit } = await import("@octokit/core");
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const title = process.env.PR_TITLE;
    const owner = process.env.OWNER;
    const repo = process.env.REPO;
    const pull_number = process.env.PR_NUMBER;
    // console.log("title==>>",title);
    const regex = /\[(.*-)?([^-]+)-([^\]]+)\]/;
    const match = title.match(regex);
    console.log("match==>>", match);
    if (match) {
        const combinedString = `${match[2]}-${match[3]}`;
        console.log("combinedString==>>", combinedString);
        octokit.request("GET /repos/{owner}/{repo}/pulls/{pull_number}", {
            owner,
            repo,
            pull_number
        }).then(({ data }) => {
            let description = data.body.replace('GEC-XXX', combinedString);
            console.log("description==>>", description);
            return octokit.request("PATCH /repos/{owner}/{repo}/pulls/{pull_number}", {
                owner,
                repo,
                pull_number,
                body: description
            })
        }).then(() => console.log("successful!!!")).catch(err => console.error("failed", err))
    } else {
        console.log("No match")
    }
})();