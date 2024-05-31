import { useForm, SubmitHandler } from "react-hook-form";
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Select,
    Spinner,
    Text,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';
import { useQueryClient } from '@tanstack/react-query';

import {useMutation} from '@tanstack/react-query';

import { createMatch } from '../api/backend'
import { MatchData, MatchFormFields } from './types';
import { PlayerCounter } from "./PlayerCounter";
import { EventBadge } from "./EventBadge";

// A Match component has 1 property you can pass; matchData
interface MatchProps {
    matchData: MatchData;
}

export function Match(matchProps: MatchProps) {
    let matchData = matchProps.matchData

    let homeGame = matchData.home_away == 'H'
    let currentTeam = matchData.team
    let opponent = matchData.opponent
    let homeTeam = homeGame ? currentTeam : opponent
    let awayTeam = homeGame ? opponent : currentTeam
    let totalPlayers = (
        matchData.joining_players.length +
        matchData.not_joining_players.length +
        matchData.spectating_players.length +
        matchData.no_answer_players.length
    )

    return (
        <Box
            as="section"
            background="white"
            padding="30px"
            padding-top="20px"
            rounded="lg"
            minWidth="2xl"
            textAlign="center"
            boxShadow="lg"
            position="relative" // allows positioning Badge relative to this Box
        >
            <EventBadge homeGame={homeGame} />
            <Heading as="h2" fontSize={["lg", "xl", "3xl"]}>{homeTeam} - {awayTeam}</Heading>
            <Text fontWeight="500" fontSize={["lg", "xl", "xl"]} mt="2">{matchData.date}</Text>
            <Text>Starts: {matchData.starts_at} | Meet: {matchData.meet_at}</Text>

            <Divider borderColor="black" borderWidth="1px" mt="4" mb="4" />

            <Flex justifyContent="space-between" width="80%" mx="auto" textAlign="center">
                <PlayerCounter
                    playerCount={matchData.joining_players.length}
                    totalCount={totalPlayers}
                    color="teal"
                    width="25%"
                    label="Joining"
                />
                <PlayerCounter
                    playerCount={matchData.not_joining_players.length}
                    totalCount={totalPlayers}
                    color="capptain.pink"
                    width="25%"
                    label="Not joining"
                />
                <PlayerCounter
                    playerCount={matchData.spectating_players.length}
                    totalCount={totalPlayers}
                    color="capptain.yellow"
                    width="25%"
                    label="Spectating"
                />
                <PlayerCounter
                    playerCount={matchData.no_answer_players.length}
                    totalCount={totalPlayers}
                    color="capptain.darkgrey"
                    width="25%"
                    label="No answer"
                />
            </Flex>
        </Box >
    )
}

export function CreateMatchModal() {
    const queryClient = useQueryClient()

    const { 
        register, 
        handleSubmit, 
        formState: {errors, isSubmitting}
    } = useForm<MatchFormFields>();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const onSubmitHandler: SubmitHandler<MatchFormFields> = async (data) => {
        // Update the backend & invalidate the frontend
        mutation.mutate(data);
        // Close the Modal element
        onClose();
    }

    // Create match mutation
    const mutation = useMutation({
        mutationFn: createMatch,
        onSuccess: () => {
            // Invalidate & refetch matches
            queryClient.invalidateQueries({ queryKey: ['matches'] })
        },
    })

    return (
        <>
        <Button mt="80px" colorScheme='teal' onClick={onOpen}>Add new match</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add new match</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                        <VStack spacing={4} textAlign="left" alignItems="left">
                            <Input {...register("team", {required: "Fill in your team name"})} type="text" placeholder="Your team name..." />
                            {errors.team && <Text color="red">{errors.team.message}</Text>}

                            <Input {...register("opponent", {required: "Fill in your opponent's team name"})} type="text" placeholder="Your Opponent..." />
                            {errors.opponent && <Text color="red">{errors.opponent.message}</Text>}
                            
                            <Select {...register("home_away", {required: "Is it a home or away match?"})}>
                                <option value='H'>Home match</option>
                                <option value='A'>Away match</option>
                            </Select>
                            {errors.home_away && <Text color="red">{errors.home_away.message}</Text>}

                            <Input {...register("location", {required: "Fill in the location of the match"})} type="text" placeholder="Location..." />
                            {errors.location && <Text color="red">{errors.location.message}</Text>}

                            <Input {...register("date", {required: "Fill in the match date"})} type="date" />
                            {errors.date && <Text color="red">{errors.date.message}</Text>}

                            <Text fontSize="sm">When does it start?</Text>
                            <Input {...register("starts_at", {required: "Fill in a starting time"})} type="time" placeholder="Starts at" />
                            {errors.starts_at && <Text color="red">{errors.starts_at.message}</Text>}

                            <Text fontSize="sm">What time to meet?</Text>
                            <Input {...register("meet_at", {required: "Fill in a meeting time"})} type="time" placeholder="Meet at" />
                            {errors.meet_at && <Text color="red">{errors.meet_at.message}</Text>}

                            <Button 
                                type="submit" 
                                size="md"
                                m="40px"
                                mb="20px" 
                                backgroundColor="capptain.green" 
                                color="#fff"
                                fontWeight="medium"
                                fontSize={["lg", "lg", "2xl"]}
                                disabled={isSubmitting}
                            >{isSubmitting ? <Spinner/> : "Submit"}</Button>
                        </VStack>
                    </form>
                </ModalBody>

                <ModalFooter>
                </ModalFooter>
            </ModalContent>
            </Modal>
            </>);
}
