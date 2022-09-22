
// import React, { useRef } from "react"
// import { useGLTF } from "@react-three/drei"

// export default function Model({}) {
//     const { nodes, materials} = useGLTF("/earth.gltf")
//     return (
//         <group scale={1.5} dispose={null}>
//             <group scale={1.13}>
//                 <mesh geometry={nodes.Object_4.geometry} material={materials["scene_-_Root"]}>
//                 </mesh>
//             </group>
//         </group>
//     )
// }

// // useGLTF.preload("/earth.gltf")

//  import * as THREE from 'three';

// export default Earth

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;


// function animate() {
// 	requestAnimationFrame( animate );
// 	renderer.render( scene, camera );
// }
// animate();