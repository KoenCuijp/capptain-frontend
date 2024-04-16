import { Badge } from "@chakra-ui/react";

type EventBadgeProps = {
    homeGame: boolean;
}

export function EventBadge(props: EventBadgeProps) {
    return (
        <Badge
            variant={props.homeGame ? "solid" : "subtle"}
            colorScheme={props.homeGame ? "green" : "pink"}
            fontSize={["xs", "sm", "md"]}
            padding={["1", "1", "2"]}
            position="absolute"
            rounded={["sm", "md", "lgs"]}
            top={-3}
            left={-7}
        >
            {props.homeGame ? "Home Game" : "Away Game"}
        </Badge>
    )
}