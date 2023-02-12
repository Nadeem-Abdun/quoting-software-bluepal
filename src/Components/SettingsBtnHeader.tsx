import React, { useState } from 'react'
import { Box, Stack, IconButton, Popper, Typography, Divider } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';

export default function SettingsBtnHeader() {
    // Notification popper func
    const [anchorEl, setAnchorEl] = useState(null);
    const handlePoppperClick = (event:any) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const openPopper = Boolean(anchorEl);
    const id = openPopper ? 'settings-popper' : undefined;

    return (
        <Box>
            <IconButton aria-describedby={id} type="button" onClick={handlePoppperClick}><SettingsIcon sx={{ color: '#b0b7c3' }} /></IconButton>
            <Popper id={id} open={openPopper} anchorEl={anchorEl}>
                <Box
                    sx={{
                        position: "relative",
                        mt: "10px",
                        "&::before": {
                            backgroundColor: "#b0b7c3",
                            content: '""',
                            display: "block",
                            position: "absolute",
                            width: 12,
                            height: 12,
                            top: -6,
                            transform: "rotate(45deg)",
                            left: "calc(50% - 6px)",
                        }
                    }}
                />
                <Box bgcolor='#b0b7c3' borderRadius={2} padding={1}>
                    <Stack height='280px' width='160px' direction='column' spacing={0.5} display='flex' justifyContent='center' alignItems='center'>
                        <Stack height='25%' width='93%' direction='column' display='flex' justifyContent='center' alignItems='center' bgcolor='#edeff2' borderRadius={2} padding={1}>
                            <IconButton >
                                <DisplaySettingsIcon color='success' fontSize='large'/>
                            </IconButton>
                            <Typography component='h2' fontSize='13px' fontWeight='bold' sx={{ color: '#3f4cbd' }}>Dashboard Settings</Typography>
                        </Stack>
                        <Divider />
                        <Stack height='25%' width='93%' direction='column' display='flex' justifyContent='center' alignItems='center' bgcolor='#edeff2' borderRadius={2} padding={1}>
                            <IconButton >
                                <AssessmentIcon color='secondary' fontSize='large'/>
                            </IconButton>
                            <Typography component='h2' fontSize='13px' fontWeight='bold' sx={{ color: '#3f4cbd' }}>Unit Conversion</Typography>
                        </Stack>
                        <Divider />
                        <Stack height='25%' width='93%' direction='column' display='flex' justifyContent='center' alignItems='center' bgcolor='#edeff2' borderRadius={2} padding={1}>
                            <IconButton >
                                <EditNotificationsIcon color='warning' fontSize='large'/>
                            </IconButton>
                            <Typography component='h2' fontSize='13px' fontWeight='bold' sx={{ color: '#3f4cbd' }}>Notification Settings</Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Popper>
        </Box>
    )
}
