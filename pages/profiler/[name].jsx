

import One from "../../components/ryanComponents/One";

import Head from "next/head";


const animationText = ["Veterinarian", "Animal Lover", "Dog Trainer"];

const IndexRyan = ({userdata}) => {

console.log("data" , userdata)


  return (
 <div>

<Head>
        <link rel="stylesheet" href="/ryan/css/basic.css" />
        <link rel="stylesheet" href="/ryan/css/layout.css" />
        <link rel="stylesheet" href="/ryan/css/blogs.css" />
        <link rel="stylesheet" href="/ryan/css/ionicons.css" />
        <link rel="stylesheet" href="/ryan/css/magnific-popup.css" />
        <link rel="stylesheet" href="/ryan/css/animate.css" />
        <link rel="stylesheet" href="/ryan/css/gradient.css" />
        <link rel="stylesheet" href="/ryan/css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="/ryan/css/demos/demo-5-colors.css" />
        <link rel="stylesheet" href="/ryan/css/demos/ihab.css" />
      </Head>


	<One/>
 </div>
  );
};
export default IndexRyan;


export async function getServerSideProps({ params }) {
	const name = params.name;
  
	const userdata = await prisma.user.findMany({
	  where: {
		name: name,
	  },
  
	  include: {
		projects: {},
		slider: {},
		about: {},
	  },
	});
  
	return {
	  props: {
		name: params.name,
		userdata: JSON.parse(JSON.stringify(userdata)),
	  },
	};
  }
  