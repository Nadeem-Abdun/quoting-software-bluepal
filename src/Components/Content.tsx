import { Box, Stack } from '@mui/material';
import OverviewCard from './OverviewCard';
import HighValueDealCard from './HighValueDealCard';
import OpportunityIndexCard from './OpportunityIndexCard';
import DealValueCard from './DealValueCard';

export default function Content() {
    return (
        <>
            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                <Stack height='97%' width='97%' spacing={2} direction='column' justifyContent='center' alignItems='center'>
                    {/* Level - 1 */}
                    <Box height='50%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Stack height='100%' width='100%' spacing={2} direction='row' justifyContent='center' alignItems='center' >
                            {/* LeftBox */}
                            <Box height='100%' width='45%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
                                <OverviewCard />
                            </Box>
                            {/* RightBox */}
                            <Box height='100%' width='55%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
                                <HighValueDealCard />
                            </Box >
                        </Stack>
                    </Box >
                    {/* Level - 2 */}
                    <Box height='50%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Stack height='100%' width='100%' spacing={2} direction='row' justifyContent='center' alignItems='center'>
                            {/* Left Box */}
                            <Box height='100%' width='25%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
                                <OpportunityIndexCard />
                            </Box>
                            {/* Right Box */}
                            <Box height='100%' width='75%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
                                <DealValueCard />
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Box >
        </>
    )
}
