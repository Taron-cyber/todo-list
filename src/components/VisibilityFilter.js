import { Container, Tabs, TabList, Tab } from "@chakra-ui/react";
import { VISISBILITY_FILTER } from "../constants";
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';

export const VisibilityFilter = () => {
    const dispatch = useDispatch();
    return (
        <Container centerContent>
            <Tabs>
                <TabList>
                    {Object.keys(VISISBILITY_FILTER).map(filterkey => {
                        const currentFilter = VISISBILITY_FILTER[filterkey];
                        return (
                            <Tab key={`visibility-filter-${currentFilter}`}
                                onClick={() => dispatch(setFilter(currentFilter))}
                            >

                                {currentFilter}
                            </Tab>
                        )
                    })}
                </TabList>
            </Tabs>
        </Container>
    )
}