import Link from "next/link";
export default function IndexPage() {
    return (
      <ul>
        <li>
          <Link href="/profiles">
            <a>Profiles</a>
          </Link>
        </li>
        <li>
          <Link href="/profiles/[name]" as="/profiles/Ganges">
            <a>Ganges Route</a>
          </Link>
        </li>
        <li>
          <Link href="/profiles/[name]" as="/profiles/Indus">
            <a>Indus Route</a>
          </Link>
        </li>
      </ul>
    )
  }