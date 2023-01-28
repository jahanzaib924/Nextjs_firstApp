import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import Image from "next/image";
import profileimg from "/images/profile.png"
export default function FirstPost() {
    return (

        <Layout>

            <Head>
                <tittle>First Post</tittle>
            </Head>
            <img src="/images/jahanzaib.jpeg" alt="Your Name" />
            <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Jahanzaib"
  />

            <h1>First Post</h1>;

            <h2><Link href="/">Back to Home</Link></h2>
        </Layout>

        
    )
}