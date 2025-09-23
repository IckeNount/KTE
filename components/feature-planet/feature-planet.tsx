// 'use client'

// import {
//   Box,
//   Container,
//   Grid,
//   GridItem,
//   Heading,
//   Text,
//   useColorModeValue,
// } from '@chakra-ui/react'
// import Image from 'next/image'

// import React from 'react'

// export const FeaturesPlanet = () => {
//   const borderColor = useColorModeValue('gray.200', 'gray.700')
//   const textColor = useColorModeValue('gray.600', 'gray.400')

//   return (
//     <Box
//       position="relative"
//       bg="gray.900"
//       py={{ base: 16, md: 24 }} // ⬅️ Section vertical padding
//       overflow="hidden" // ⬅️ Crucial for floating tag containment
//       _before={{
//         content: '""',
//         position: 'absolute',
//         inset: 0,
//         zIndex: -1,
//         bg: 'gray.900', // ⬅️ Fallback background
//       }}
//     >
//       <Container maxW="6xl" textAlign="center" mb={12}>
//         <Heading
//           fontSize={['3xl', '4xl']} // ⬅️ Responsive header size
//           fontWeight="bold"
//           color="white"
//         >
//           Simple helps your teams work more efficiently together
//         </Heading>
//       </Container>

//       {/* Planet + overlays */}
//       <Box position="relative" textAlign="center" mb={20}>
//         {/* Glowing pulse effect - simplified */}
//         <Box
//           position="absolute"
//           top="50%"
//           left="50%"
//           transform="translate(-50%, -50%) scale(3.5)" // ⬅️ Glow scale
//           zIndex={-1}
//           w="800" // ⬅️ Adjust glow size
//           h="800"
//           borderRadius="full"
//           bgGradient="radial(circle, blue.500, transparent 45%)"
//           filter="blur(120px)"
//           animation="pulse 4s ease-in-out infinite"
//         />

//         {/* Planet image */}
//         <Box
//           position="relative"
//           display="inline-block"
//           mx="auto"
//           w="400px" // ⬅️ Match planet width
//           h="400px"
//         >
//           <Image
//             src="/static/glow-planet/planet/planet.png"
//             alt="Planet"
//             width={400}
//             height={400}
//             style={{
//               margin: '0 auto',
//               borderRadius: '9999px',
//               backgroundColor: '#1a202c', // gray.900
//             }}
//           />

//           {/* Overlay image (background SVG) */}
//           <Box
//             position="absolute"
//             top="-80px" // ⬅️ Adjust Y position
//             right="-240px" // ⬅️ Adjust X position
//             zIndex={10}
//             pointerEvents="none"
//           >
//             <Image
//               src="/static/glow-planet/planet-overlay.svg"
//               alt="Planet overlay"
//               width={789}
//               height={755}
//               style={{ maxWidth: 'none' }}
//             />
//           </Box>
//         </Box>

//         {/* Floating Tags */}
//         <Box
//           position="relative"
//           top="64px"
//           left="-112px"
//           zIndex={10}
//           opacity={0.8}
//           animation="float 4s ease-in-out infinite"
//         >
//           <Image
//             src="/static/glow-planet/planet-tag-01.png"
//             alt="Tag 01"
//             width={120}
//             height={80}
//           />
//         </Box>

//         <Box
//           position="absolute"
//           top="50%"
//           left="50%"
//           zIndex={10}
//           opacity={0.3}
//           animation="float 4s ease-in-out infinite"
//           style={{ animationDelay: '1s' }}
//         >
//           <Image
//             src="/static/glow-planet/planet-tag-02.png"
//             alt="Tag 02"
//             width={120}
//             height={80}
//           />
//         </Box>

//         <Box
//           position="absolute"
//           bottom="96px"
//           left="-80px"
//           zIndex={10}
//           opacity={0.25}
//           animation="float 4s ease-in-out infinite"
//           style={{ animationDelay: '2s' }}
//         >
//           <Image
//             src="/static/glow-planet/planet-tag-03.png"
//             alt="Tag 03"
//             width={120}
//             height={80}
//           />
//         </Box>

//         <Box
//           position="absolute"
//           bottom="128px"
//           left="256px"
//           zIndex={10}
//           opacity={0.8}
//           animation="float 4s ease-in-out infinite"
//           style={{ animationDelay: '3s' }}
//         >
//           <Image
//             src="/static/glow-planet/planet-tag-04.png"
//             alt="Tag 04"
//             width={120}
//             height={80}
//           />
//         </Box>
//       </Box>

//       {/* Feature Grid */}
//       <Container maxW="6xl">
//         <Grid
//           templateColumns={{
//             base: '1fr',
//             sm: 'repeat(2, 1fr)',
//             lg: 'repeat(3, 1fr)',
//           }}
//           gap={10}
//         >
//           {features.map((feature, idx) => (
//             <GridItem
//               key={idx}
//               position="relative"
//               px={6} // ⬅️ Padding inside each card
//               py={10}
//               borderTop="1px"
//               borderColor={borderColor}
//             >
//               <Box display="flex" alignItems="center" mb={2}>
//                 <Box as="svg" fill="blue.400" w={4} h={4} mr={2}>
//                   <path d={feature.iconPath} />
//                 </Box>
//                 <Text fontWeight="semibold" fontSize="lg" color="white">
//                   {feature.title}
//                 </Text>
//               </Box>
//               <Text fontSize="sm" color={textColor}>
//                 {feature.description}
//               </Text>
//             </GridItem>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   )
// }

// const features = [
//   {
//     title: 'Instant Analytics',
//     description:
//       'Collect essential insights about how visitors are using your site with in-depth page view metrics like pages, referring sites, and more.',
//     iconPath:
//       'M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z',
//   },
//   {
//     title: 'Metadata',
//     description:
//       'Manage metadata for each page and route easily using our built-in tools.',
//     iconPath:
//       'M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z',
//   },
//   {
//     title: 'SEO & Performance',
//     description:
//       'Ensure your app meets SEO and speed standards for optimal results.',
//     iconPath:
//       'M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
//   },
//   {
//     title: 'Custom Code',
//     description:
//       'Add HTML, script tags, analytics, or widgets with ease using our platform.',
//     iconPath: 'M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Z',
//   },
//   {
//     title: 'Localization',
//     description:
//       'Support internationalization with built-in i18n tools and content structuring.',
//     iconPath: 'M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1Z',
//   },
//   {
//     title: 'Canonical URL',
//     description:
//       'Avoid duplicate content and improve indexing with smart canonical controls.',
//     iconPath: 'M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Z',
//   },
// ]
