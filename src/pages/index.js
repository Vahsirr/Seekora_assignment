import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { redirect } from "next/dist/server/api-utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      
    </div>
  );
}

export async function getServerSideProps (context) {
  return {
    redirect: {
      destination: '/search',
      permanent: true
    }
  }
}