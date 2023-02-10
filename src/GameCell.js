import { Box, Center, HStack, Image, Stack, Text } from '@chakra-ui/react'
import Games from './mlb_games.json'
import { useRef } from 'react'

function GameCell() {
  const game = Games[0]
  const windowSize = useRef([window.innerWidth, window.innerHeight])
  return (
    <div className="GameCell">
        <Center>
            <Stack width={['100%', '50%', '40%']} mt={2} mx={2}>
                <Box bg='#3b3b3b' alignItems='center' p={2} color='white' border='1px' borderColor='#02e020' borderRadius='md'>
                    <Center><Text fontSize={['md', 'xl', 'xl']} md='white'>{game.date}</Text></Center>
                    <HStack mb={2}>
                            <Center width='34%'>
                                <Stack alignItems='center'>
                                    <Image src={game.home_image} alt='home image' boxSize='55%'/>
                                    <Text fontSize={['sm', 'xl', 'xl']} as='b' color='white'>{windowSize.current[0] > 500 ? game.home_full_name : game.home_name}</Text>
                                </Stack>
                            </Center>
                            <Center width='34%'>
                                <Stack alignItems='center'>
                                    <Text fontSize={['3xl', '6xl', '6xl']} as='b' color='white'>{game.home_score} - {game.away_score}</Text>
                                </Stack>
                            </Center>
                            <Center width='34%'>
                                <Stack alignItems='center'>
                                    <Image src={game.away_image} alt='away image' boxSize='55%'/>
                                    <Text fontSize={['sm', 'xl', 'xl']} as='b' color='white'>{windowSize.current[0] > 500 ? game.away_full_name : game.away_name}</Text>
                                </Stack>
                            </Center>
                    </HStack>
                    <HStack mt={2}>
                        <Center width='34%'>
                            <Text fontSize={['sm', 'xl', 'xl']} color='white'>{game.home_win_prob * 100}%</Text>
                        </Center>
                        <Center width='32%'>
                            <Text fontSize={['sm', 'xl', 'xl']} color='white'>Win Probability</Text>
                        </Center>
                        <Center width='34%'>
                            <Text fontSize={['sm', 'xl', 'xl']} color='white'>{(1 - game.home_win_prob) * 100}%</Text>
                        </Center>
                    </HStack>
                    <HStack>
                        <Center width='34%'>
                            <Text fontSize={['sm', 'xl', 'xl']} color='white'>{game.home_bet > 0 ? '+' + game.home_bet : game.home_bet} ({Math.round(game.home_bet_dec * 100) / 100})</Text>
                        </Center>
                        <Center width='32%'>
                            <Text fontSize={['sm', 'xl', 'xl']} color='white'>Spread</Text>
                        </Center>
                        <Center width='34%'>
                            <Text fontSize={['sm', 'xl', 'xl']} color='white'>{game.away_bet > 0 ? '+' + game.away_bet : game.away_bet} ({Math.round(game.away_bet_dec * 100) / 100})</Text>
                        </Center>
                    </HStack>
                    <HStack>
                        <Center width='34%'>
                            <Text fontSize={['sm', 'xl', 'xl']} color='white'>{Math.round(game.home_win_rate * 1000) / 1000}</Text>
                        </Center>
                        <Center width='32%'>
                            <Text fontSize={['sm', 'xl', 'xl']} color='white'>Winning Rate</Text>
                        </Center>
                        <Center width='34%'>
                            <Text fontSize={['sm', 'xl', 'xl']} color='white'>{Math.round(game.away_win_rate * 1000) / 1000}</Text>
                        </Center>
                    </HStack>
                </Box>
            </Stack>
        </Center>
    </div>
  );
}

export default GameCell;
