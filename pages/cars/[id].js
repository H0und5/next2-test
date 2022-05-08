import { useRouter } from "next/router";

import Head from "next/head";

import Image from "next/image";

export default function Car({ car }) {

  const router = useRouter();
  const { id } = router.query;

  return (<>

  <Head>

    <title>{car.color} {car.id}</title>

  </Head>
  
    <h1>Hello {id}</h1>
    <Image src={car.image} alt={`Picture of a ${id}`} />

  </>)



}


export async function getStaticProps({ params }) {


  const req = await fetch(`https://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { car: data },

  }

}



export async function getStaticPaths() {

}