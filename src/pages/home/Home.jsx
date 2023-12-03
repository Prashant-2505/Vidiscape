import React, { useState } from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

import { Tabs, Box, TabList, TabPanels, Tab, TabPanel, FormControl, FormLabel, Input } from '@chakra-ui/react'
import Login from "../login/Login";
import Signup from "../signup/SignUp";



const Home = () => {


    const logIn = true; 

    return (
        <div className="homePage">
            {logIn ? (
                <>
                    <HeroBanner />
                    <Trending />
                    <Popular />
                    <TopRated />
                </>
            ) : (
                <div className="Auth">
                    <Box w={"50%"}
                        mx={'auto'}
                        className="Form"
                        p={4} borderRadius={"lg"} borderWidth={"1px"}>
                        <Tabs variant='soft-rounded' >
                            <TabList mb={"1em"}>
                                <Tab className="tab" width={"50%"}>Login</Tab>
                                <Tab className="tab" width={"50%"}>Sign Up</Tab>
                            </TabList>

                            <TabPanels
                                className="FormItems"
                            >
                                <TabPanel>
                                    <Login />
                                </TabPanel>

                                <TabPanel>
                                    <Signup />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>
                </div>
            )}
        </div>
    );
};

export default Home;
