import logo from './btr-lif-transparent.png';
import { Box, Center, Image } from '@chakra-ui/react'

function Navbar() {
  return (
    <div className="Navbar">
        <Box bg='#3b3b3b' w='100%' alignItems='center' p={2} color='white' borderBottom='1px' borderBottomColor='#02e020'>
            <Center>
                <Image src={logo} alt='btr lif logo' boxSize='67px'/>
            </Center>
        </Box>
    </div>
  );
}

export default Navbar;
