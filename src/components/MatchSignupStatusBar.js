import ProgressBar from 'react-bootstrap/ProgressBar';

function MatchSignupStatusBar({ joining, notJoining, pending }) {
    const total = joining + notJoining + pending
    function relativeCount(count) {
        return (count / total) * 100
    }
    return (
        <ProgressBar className='progress-thick' style={{ height: "30px" }}>
            <ProgressBar striped variant="success" label={`${joining} joining`} now={relativeCount(joining)} key={1} />
            <ProgressBar variant="grey" label={`${notJoining} not joining`} now={relativeCount(notJoining)} key={2} />
            <ProgressBar striped variant="warning" label={`${pending} pending`} now={relativeCount(pending)} key={3} />
        </ProgressBar>
    );
}

export default MatchSignupStatusBar;