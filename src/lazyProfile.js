import Image from 'next/image'

export default function LazyProfile({ profile }) {
    return (
        <Image src={`/${profile}.jpeg`} alt={profile} width="600" height="400" />
    )
}