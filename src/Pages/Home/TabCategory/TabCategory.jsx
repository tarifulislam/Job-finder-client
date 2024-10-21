import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCarts from './TabCarts';
const TabCategory = () => {
    return (
        <div className=''>
            <div className="text-center w-6/12 mx-auto pb-6">
                <h3 className="text-2xl font-semibold pb-3">Browse Jobs By Categories</h3>
                <p>Three categories available for the time being. They are Web Development, Graphics Design and Digital Marketing. Browse them by clicking on the tabs below.</p>
            </div>
            <div className=''>
                <Tabs>
                    <div className='flex items-center justify-center'>
                        <TabList className='mx-auto'>
                            <Tab>Web Development</Tab>
                            <Tab>Graphics Design</Tab>
                            <Tab>Digital Marketing</Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <TabCarts category="Web Development"></TabCarts>
                    </TabPanel>
                    <TabPanel>
                        <TabCarts category="Graphics Design"></TabCarts>
                    </TabPanel>
                    <TabPanel>
                        <TabCarts category="Digital Marketing"></TabCarts>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TabCategory;