import { tabs } from "@/constants/data";
import { components } from "@/constants/theme";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";


const tabBar = components.tabBar;
const TabLayout = () => {
    const inset = useSafeAreaInsets();
    const TabIcon = ({ focused, icon }: TabIconProps) => {
        const animatedStyle = useAnimatedStyle(() => ({
            backgroundColor: withTiming(focused ? tabBar.activeBg : "transparent", { duration: 200 }),
            transform: [{ scale: withTiming(focused ? 1.1 : 1, { duration: 200 }) }],
        }));

        return (
            <View className="tabs-icon">
                <Animated.View className="tabs-pill" style={animatedStyle}>  
                    <Image 
                        source={icon} 
                        resizeMode="contain" 
                        className="tabs-glyph"
                        style={{width: tabBar.iconFrame, height: tabBar.iconFrame}}
                        tintColor={focused ? tabBar.activeTint : tabBar.inactiveTint}
                    />
                </Animated.View>
            </View>
        )
    };

    return (
        <Tabs screenOptions={{ 
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: "absolute",
                bottom: Math.max(inset.bottom, tabBar.horizontalInset),
                height: tabBar.height,
                marginHorizontal: tabBar.horizontalInset,
                borderRadius: tabBar.radius,
                backgroundColor: "black",
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarItemStyle: {
                paddingVertical: (tabBar.height / 2) - (tabBar.iconFrame / 2),
            },
            tabBarIconStyle: {
                width: tabBar.iconFrame,
                height: tabBar.iconFrame,
                alignItems: "center",
                justifyContent: "center",
            }
            }}>
            {tabs.map((tab) => (
                <Tabs.Screen 
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title, 
                        tabBarIcon: ({focused}) => (
                            <TabIcon focused={focused} icon={tab.icon}/>
                        )
                    }}/>
            ))}
                
        </Tabs>
    )
};

export default TabLayout;