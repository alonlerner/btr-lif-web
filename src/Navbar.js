import logo from './btr-lif-transparent.png';
import { Box, Center, Image } from '@chakra-ui/react'

function Navbar() {
  return (
    <div className="Navbar">
        <Box bg='#474a49' w='100%' alignItems='center' p={2} color='white'>
            <Center>
                <Image src={logo} alt='btr lif logo' boxSize='67px'/>
            </Center>
        </Box>
    </div>
  );
}

export default Navbar;
