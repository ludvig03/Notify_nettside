// import ThreeGlobe from 'three-globe';
// import * as THREE from 'three';
// import { react, useState, Suspense } from "react"
// import { Canvas, useLoader } from "@react-three/fiber"
// import Earth from "./Earth.js"  
// import ReactDOM from 'react-dom'
// import { TextureLoader } from 'three/src/loaders/TextureLoader'
// import { useTexture } from "@react-three/drei"



// export default function Klode() {
//     const texture_6 = useLoader(TextureLoader, 'texture.jpeg')

//     return (
        
//         <div>
//             <Canvas style={{height: "100vh", width: "100vw"}}>
//                 <Suspense fallback={null}>
//                     <ambientLight intensity={0.5} />
//                     <directionalLight color="white" position={[0, 0, 3]} />
//                     <Stars radius={20} depth={50} count={5000} factor={5} saturation={0} fade speed={3}/>
//                     <mesh position={[-3, 0, 0]}>
//                         <sphereGeometry/>
//                         <meshStandardMaterial map={texture_6}/>
//                     </mesh>
//                 </Suspense>
//             </Canvas>   
//             <div className="canvas-placeholder"></div>
//         </div>
//     )

import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { Stars } from "@react-three/drei"
import { OrbitControls } from '@react-three/drei'
import { Html, useProgress } from '@react-three/drei'
import * as THREE from "three"



function Earth() {



    // const successCallback = (position) => {
    //     console.log(position)
    //     const latitude = (position.coords.latitude).toString()
    //     const longitude = (position.coords.longitude).toString()
    // }

    // const errorCallback = (error) => {
    //     console.error(error)
    // }

    // function getCord() {
    //     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    // }   
    // getCord()


    // navigator.geolocation.getCurrentPosition(position => {let lat = position.coords.longitude; let lng = position.coords.latitude;});
    
    function main() {
      if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
      }
    }

    function showPosition(position){
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
    }

    main()
    const [colorMap, displacementMap, normalMap, roughnessMap, skyMap, earthcloudmaptrans] = useLoader(TextureLoader, [
      './earthmap.jpg',
      './earth_displace.jpg',
      "./earth_normalmap.webp",
      "./earth_rough.webp",
      "./earthcloudmap.jpg",
      "./earthcloudmaptrans.jpg",
    ])
    
    // const texture_1 = useLoader(TextureLoader, "")
    const mesh = useRef()
    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.002
    })

    // const mesh2 = useRef()
    // useFrame(() => {
    //   mesh2.current.rotation.x = mesh2.current.rotation.y += 0.002
    // })


    // function Loader() {
    //   const { progress } = useProgress()
    //   return (
    //     <Html center>{progress} % loaded</Html>
    //   )
    // }

    

  return (
    <>
      <mesh ref={mesh} position={[0, 0, 0]} scale={1.9}>
        <sphereGeometry args={[1, 100, 1000]}/>
        <meshStandardMaterial map={colorMap} displacementMap={displacementMap} normalMap={normalMap} roughnessMap={roughnessMap} displacementScale={0.03} attach="material" />
        <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} panSpeed={0.5} rotateSpeed={0.5}/>
      </mesh>
      {/* <mesh ref={mesh2} position={[0, 0, 0]} scale={1.9}>
        <sphereGeometry args={[1.05, 32, 32]}/>
        <meshPhongMaterial map={earthcloudmaptrans} depthWrite={true} opacity={0.7} transparent={true} side={THREE.DoubleSide}/>
      </mesh> */}
    </>
  )
}

export default function Klode() {
  return (
    <Canvas style={{height: "100vh", width: "100vh"} }>
      <ambientLight intensity={0.2} color={"bbbbb"}/>
      <directionalLight position={[-10, 10, 30]} angle={0.15} penumbra={1} intensity={0.6}/>
      {/* <pointLight position={[-10, -10, -10]} /> */}
      <Suspense fallback={null}>
        {/* <Stars radius={10} depth={50} count={8000} factor={3} saturation={1} fadeSpeed={3}/> */}
        <Earth/>
      </Suspense>
    </Canvas>
  )
}

