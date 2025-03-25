import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Linking, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import YoutubeIframe from 'react-native-youtube-iframe';

const { width: screenWidth } = Dimensions.get('window');

const Chats = () => {
  const data = [
    { id: 1, title: 'Since inception, NASA has selected 360 astronaut candidates: 299 men, 61 women; 212 military, 138 civilians; 191 pilots, 159 non-pilots.' },
    { id: 2, title: 'When Expedition 1 arrived at the International Space Station on Nov. 2, 2000, there has been a continuous human presence.' },
    { id: 3, title: 'The first class of NASA astronauts was selected in 1959. They are known as the Mercury 7.' },
  ];

  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const carousel = useRef(null);
  const [playing, setPlaying] = useState(false);

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Text style={styles.carouselText}>{item.title}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.ray}>
        <Text style={styles.gas}>Astronauts</Text>
        <Text style={styles.art}>
          The term “astronaut” derives from the Greek {"\n"}words meaning “star sailor,” and refers to all{"\n"} who have been launched as crew members{"\n"} aboard NASA spacecraft bound for orbit{"\n"} and beyond. The term “astronaut” has been{"\n"} maintained as the title for those selected to{"\n"} join the NASA corps of astronauts who make{"\n"} “star sailing” their career profession.
        </Text>
      </View>

      <View style={styles.nick}>
        <Text style={styles.need}>Quick Fact</Text>
      </View>

      <View style={styles.tuff}>
        <Carousel
          ref={carousel}
          data={data}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          layout={'default'}
          onSnapToItem={index => setActiveDotIndex(index)}
          loop
        />
        <View style={styles.nasa}>
          <Pagination
            carouselRef={carousel}
            activeDotIndex={activeDotIndex}
            dotsLength={data.length}
            dotStyle={styles.dotStyle}
          />
        </View>
      </View>

      <View style={styles.future}>
        <TouchableOpacity onPress={() => carousel.current.snapToItem(activeDotIndex - 1)}>
          <AntDesign name="leftcircleo" size={24} color="black" style={styles.dark} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => carousel.current.snapToItem(activeDotIndex + 1)}>
          <AntDesign name="rightcircleo" size={24} color="black" style={styles.dark} />
        </TouchableOpacity>
      </View>

      <View style={styles.live}>
        <Text style={styles.yourz}>Read More About Active Astronauts</Text>
        <TouchableOpacity style={styles.cold}>
          <AntDesign name="downsquare" size={24} color="black" style={styles.heart} />
        </TouchableOpacity>
      </View>

      <View>
        <YoutubeIframe height={300} play={playing} videoId={"z74OwRy8o9I"} />
        <Text style={styles.style}>
          (Jan. 10, 2020) — The 2017 Class of Astronauts{"\n"} participate in graduation ceremonies at the Johnson Space Center in Houston, Texas. From left are, 
          <TouchableOpacity onPress={() => Linking.openURL('https://www.nasa.gov/')}>
            <Text style={styles.linkText}>NASA</Text>
          </TouchableOpacity> astronaut Jonny Kim, Canadian Space Agency (CSA) astronaut Joshua Kutryk, NASA astronaut Jessica Watkins, CSA astronaut Jennifer Sidey-Gibbon,
          <TouchableOpacity onPress={() => Linking.openURL('https://www.nasa.gov/')}>
            <Text style={styles.linkText}> NASA </Text>
          </TouchableOpacity>
          astronauts Kayla Barron, Jasmin Moghbeli, Loral O’Hara, Zena Cardman, Raja Chari, Matthew Dominick, Bob Hines and Warren Hoburg. This is the first class of astronauts to graduate under the Artemis program and are now eligible for assignments to the International Space Station, Artemis missions to the Moon, and ultimately, missions to Mars.
        </Text>
      </View>

      <View style={styles.stop}>
        <Image
          source={require('../../images/new7.jpg')} 
          style={styles.error}
        />  
        <Text style={styles.ocean}> National Aeronautics and Space Administration</Text>
        <Text style={styles.jungle}> NASA explores the unknown in air and space,{"\n"} innovates for the benefit of humanity, and inspires {"\n"} the world through discovery.</Text>
      </View>

      <View style={styles.imagine}>
        <View style={styles.million}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.nasa.gov/')}>
            <Text style={styles.sancho}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.nasa.gov/news/')}>
            <Text style={styles.sancho}>News & Events</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.nasa.gov/multimedia/')}>
            <Text style={styles.sancho}>Multimedia</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://plus.nasa.gov/')}>
            <Text style={styles.sancho}>Nasa</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.nasa.gov/nasa-missions/')}>
            <Text style={styles.sancho}>Missions</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.nasa.gov/nasa-missions/')}>
            <Text style={styles.sancho}>Humans in Space </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.band}>
          <TouchableOpacity style={styles.item} onPress={() => Linking.openURL('https://science.nasa.gov/universe/')}>
            <Text style={styles.sancho}>The Universe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => Linking.openURL('https://science.nasa.gov/')}>
            <Text style={styles.sancho}>Science</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => Linking.openURL('https://www.nasa.gov/aeronautics/')}>
            <Text style={styles.sancho}>Aeronautics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => Linking.openURL('https://www.nasa.gov/technology/')}>
            <Text style={styles.sancho}>Technology</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => Linking.openURL('https://www.nasa.gov/learning-resources/')}>
            <Text style={styles.sancho}>Learning Resources</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => Linking.openURL('https://www.nasa.gov/about/')}>
            <Text style={styles.sancho}>About NASA</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.soul}> 
        <Text style={styles.love}>Copyright © 2025 khalidmohd</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    color: '#fff',
    backgroundColor: '#000',
  },
  ray: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 0.8,
    marginTop: 43,

  },
  gas: {
    fontSize: 34,
    color: '#00FFFF',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '600', // Use string for fontWeight
  },
  art: {
    fontSize: 17,
    color: '#FFFF',
    lineHeight: 26,
    left: 9,

  },
  nick: {
    marginTop: 13,
  },
  need: {
    fontSize: 16,
    color: '#00FFFF',
    letterSpacing: 5,
    textTransform: 'uppercase'
  },
  tuff: {
    marginTop: 13,
    justifyContent: 'space-around',
  },
  carouselItem: {
    padding: 20,
    right: 14,
  },
  carouselText: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.6,
  },
  dotStyle: {
    backgroundColor: 'red',
  },
  future: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  dark: {
    marginHorizontal: 10,
    borderRadius: 25,
    padding: 10,
    fontSize: 30,
    color: '#00FFFF',
    backgroundColor: 'red',
  },
  live: {
    marginTop: 35,
    flexDirection: 'row', // Align text and icon in a row
    justifyContent: 'space-between', // Space them evenly
  },
  yourz: {
    fontSize: 18,
    color: '#FFFF',
    fontWeight: '600',

  },
  cold: {
  },
  heart: {
    marginBottom: 35,
    right: 33,
    fontSize: 20,
    fontWeight: '600',
    color: 'red',
    top: 4,

  },
  style: {
    color: '#FFFF',
    lineHeight: 22,
    letterSpacing: 0.8,
    padding: 8,
    fontSize: 15,

  },
  linkText: {
    textDecorationLine: 'underline', // Underline the text
    color: 'red', // Color for the link
    top: 5.7,
    fontWeight: '800',
  },
  stop: {
  marginTop: 35,
   padding: 8,
  },
  error: {
    width: '28%',
    height: '90',
  },
  ocean: {
    marginTop: 43,
    fontSize: 21,
    fontWeight: 700,
    padding: 8,
    color: '#FFF',
  },
  jungle: {
    marginTop: 3,
    fontWeight: 400,
    padding: 8,
    color: '#B9B9BB',
  },
  sancho: {
    color: '#FFFF',
    fontSize: 15,
    marginBottom: 10, // Space below each item
     textTransform: 'capitalize',
  },
  imagine: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Distribute space evenly
    marginTop: 10, // Space above the section
  },
  million: {
    width: '51%', // Adjust width to fit 4 items on the left
    padding: 20,
  },
  band: {
    width: '70%', // Adjust width to fit 4 items on the right
    flexDirection: 'row', 
    flexWrap: 'wrap', // Allow items to wrap
    justifyContent: 'space-between', // Distribute space evenly
    alignItems: 'flex-start', // Align items at the start
    padding: 20,
  },
  item: {
    width: '70%', // Adjust width to fit items in the grid (4 items per row)
  },
  soul: {
    marginTop: 32,
    alignItems: 'center',

    },
    love: {
      fontWeight: '500',
      color: '#00FFFF',
      marginBottom: 22,
      },
});               

export default Chats;