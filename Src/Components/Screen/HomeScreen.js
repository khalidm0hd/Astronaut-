import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking,  ScrollView} from 'react-native'
import disc from '@jsamr/counter-style/presets/disc';
import MarkedList from '@jsamr/react-native-li';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';


const HomeScreen = () => {

  return (
    <ScrollView style={styles.container}>
               <View style={styles.title}>
    
       </View>    
       <View style={styles.see}> 
        <Animatable.Text animation="fadeInDown"  duration={7000} style={styles.idea}>
        The World's Most</Animatable.Text>
        <Animatable.Text animation="fadeInDown" duration={7000} style={styles.durk}>Affordable BPO</Animatable.Text>
       </View>  
       <View style={styles.star} > 
       <Animatable.Text animation="fadeInDown" duration={7000} style={styles.sun} > 
          Effortlessly build a dedicated and {"\n"}compliant team in the Philippines with {"\n"}our all-in-one platform
          </Animatable.Text> 
       </View> 
       <TouchableOpacity style={styles.button}>
          <Animatable.Text animation="fadeInDown"duration={5000}  style={styles.day} >get started  </Animatable.Text>
        </TouchableOpacity>
        <View style={styles.hi} > 
       <Text style={styles.easy} > 
       Trusted by thousands of companies, {"\n"}including ones associated with brands{"\n"} such as
          </Text> 
       </View>  
       <View style={styles.profile}>
       <Animatable.Image animation="fadeInLeft" duration={2500}
       source={require('../../images/new13.jpg')} 
       style={styles.images}
       />  
       <Animatable.Image animation="fadeInRight" duration={2500}
       source={require('../../images/new17.jpg')} 
       style={styles.images}
       />
         <Animatable.Image animation="fadeInLeft" duration={2500}
       source={require('../../images/new18.jpg')} 
       style={styles.images}
       />
         <Animatable.Image animation="fadeInRight" duration={2500}
       source={require('../../images/new14.jpg')} 
       style={styles.images}
       />
          <Animatable.Image animation="fadeInDown" duration={2500}
       source={require('../../images/new11.jpg')} 
       style={styles.images}
       />  
        </View> 
        <View style={styles.think}> 
        <Text style={styles.find}>
        Build Your Team in the {"\n"} Philippines with Ease</Text>
        <Text style={styles.create}>
        Effortlessly Find, Hire, and Manage{"\n"} Top-Notch Virtual Staff in the{"\n"} Philippines
        </Text>
       </View> 
       <View style={styles.hire} > 
       <Text style={styles.team} > 
       Hire Diverse Talent
          </Text> 
          <Text style={styles.winner} > 
          From Virtual Assistants{"\n"} to Specialists
          </Text> 
          <Text style={styles.time} > 
          Connect with top talent and hire for the{"\n"} roles that you need. From administrative{"\n"} support to creative services, accounting{"\n"} and bookkeeping, and technical expertise, {"\n"}hire the perfect virtual assistants and {"\n"}specialists to meet your business needs.{"\n"} Build your team with the best the {"\n"}Philippines has to offer.
          </Text> 
       </View>  
       <View style={styles.dream}> 
        <Text style={styles.star}>Customer Service Representatives</Text>
        <Text style={styles.star}>Virtual Assistants</Text>
        <Text style={styles.star}>Real Estate Virtual Assistants</Text>
        <Text style={styles.star}>E-Commerce Assistant</Text>
        <Text style={styles.star}>Bookkeepers</Text>
        <Text style={styles.star}>Administrative Assistants</Text>
        <Text style={styles.star}>Sales Representatives</Text>
        <Text style={styles.star}>Accountants</Text>
        <Text style={styles.star}>Customer Service Representatives</Text>
       </View> 
       <TouchableOpacity style={styles.better}>
          <Text style={styles.day} >get started </Text>
        </TouchableOpacity> 
        <View style={styles.need} > 
        <Image
       source={require('../../images/new5.jpg')} 
       style={styles.brave}
       />  
       <Text style={styles.guess} > 
       Access Thousands of
          </Text> 
          <Text style={styles.earth} > 
          Work-From-Home{"\n"} Opportunities
          </Text> 
          <Text style={styles.call} > 
          Find an online job today on the{"\n"} Philippines most trusted platform for{"\n"} remote work. Secure your next role{"\n"} from a vast array of positions and join{"\n"} the community of Filipino {"\n"}professionals thriving in a flexible work{"\n"} environment.
          </Text> 
       </View>  
       <View style={styles.ghost}> 
       <MarkedList counterRenderer={disc}>
  {["Find online jobs", "Apply for home-based jobs", "Set your own salary rate", "Get paid safely", "Secure and compliant"].map((item, index) => (
    <Text key={index} style={styles.go}>{item}</Text> // Added key prop
  ))}
</MarkedList>
       </View>  
       <View style={styles.lost}> 
       <TouchableOpacity onPress={() => Linking.openURL('https://th-th.facebook.com/')}>
       <Text>
       <Entypo name="facebook-with-circle" size={24} color="black" style={styles.off}/>
       </Text>   
       </TouchableOpacity>
         <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/')}>
       <Text>
       <AntDesign name="instagram" size={24} color="black" style={styles.off} />
       </Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/')}>
       <Text>
       <Entypo name="linkedin-with-circle" size={24} color="black" style={styles.off} />
       </Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/')}>
       <Text>
       <Entypo name="youtube-with-circle" size={24} color="black" style={styles.off} />
       </Text>
       </TouchableOpacity>
       </View> 
       <View style={styles.soul} > 
       <Text style={styles.love}>Copyright © 2025 khalidmohd</Text>
       </View>  
        </ScrollView>     

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  see: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70, // Set a fixed height for the see view

  },
  idea: {
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 32,
  },  
  durk: {
    fontSize: 32,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#2563eb',
  },
  star: {
    alignItems: 'center',
    marginTop: 21,
  },
  sun: {
    textTransform: 'capitalize',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 41,
    textTransform: 'capitalize',
    fontSize: 21,
    fontWeight: '600',
    width:163,
    paddingVertical: 13, // Adjust vertical padding
    borderColor: 'dodgerblue',
    borderWidth: 0.5, // Add border width
    borderRadius: 13,        
    backgroundColor: '#2563eb',
    alignSelf: 'center',
  },
  day: {
    textTransform: 'capitalize',
    fontSize: 22,
    fontWeight: '400',
    color: '#fff',
  },
  hi: {
    alignItems: 'center',
    marginTop: 52,

  },
  easy: {
    textTransform: 'capitalize',
    fontWeight: '400',
    fontSize: 16,
    color: '#334155',
    textAlign: 'center',
  },
  
  profile: {
    flexDirection:"row",
    flexWrap: "wrap",
    justifyContent: 'center',
    marginTop: 40,
  },
  images: {
    width: 170,
    height: 77,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  think: {
  marginTop: 60,
  backgroundColor: '#2563EB',
  paddingBottom: 40,

},
find: {
  color: '#fff', // Ensure text color contrasts with grey background
  fontSize: 26, 
  textAlign: 'center', // Center the text
  fontWeight: '700',
  marginTop: 40,
},
create: {
  color: '#fff',
  fontSize: 17, 
  fontWeight: '400',
  textAlign: 'center', // Center the text
  marginTop: 20,
  lineHeight: 25,
},
hire: {
  marginTop: 66,
},
team: {
  Color: '#000',
  fontSize: 29,
  fontWeight: '700',
  textAlign: 'center', // Center the text
},
winner: {
  Color: '#000',
  fontSize: 28,
  fontWeight: '800',
  textAlign: 'center', // Center the text
  color: '#2563EB',
  margin: 4,

},
time: {
  Color: '#334155',
  fontSize: 18,
  textAlign: 'center',
  lineHeight: 25,
  marginTop: 18,
},
dream: {
  marginTop: 18,
  flexDirection:"column",
},
star: {
  Color: '#334155',
  textAlign: 'center',
  marginTop: 18,
  fontSize: 17,
},
better: {
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 41,
  fontWeight: '600',
  width:153,
  paddingVertical: 10, // Adjust vertical padding
  borderColor: 'dodgerblue',
  borderWidth: 0.5, // Add border width
  borderRadius: 13,        
  backgroundColor: '#2563eb',
  alignSelf: 'center',
},
need: {
  textAlign: 'center',
  marginTop: 88,
},
brave: {
  alignSelf: 'center',
  
},
guess: {
  color: '#0000ff',
  fontSize: 25,
  fontWeight: '700',
  textAlign: 'center', // Center the text
},
earth: {
  color: '#000',
  fontSize: 22,
  fontWeight: '700',
  textAlign: 'center', 
  marginTop: 3,
},
call: {
  Color: '#334155',
  fontSize: 18,
  textAlign: 'center',
  lineHeight: 25,
  marginTop: 19,
},
ghost: {
  marginTop: 20,
  backgroundColor: '#f0f0f0',
  alignSelf: 'center',
  
},
go: {
  color: '#000',
  fontWeight: '500',
  fontSize: 16,
  marginVertical: 2, // Added margin for spacing
  },
  lost: {
    flexDirection:'row',
    alignSelf: 'center',
    marginTop: 27,
    backgroundcolor: 'blue',
    gap: 27,

    },
    off: {
      color: 'blue',
      fontSize: 34,
      },
      soul: {
        marginTop: 32,
        alignItems: 'center',

        },
        love: {
          fontWeight: '500',
          marginBottom: 12,
          },
});

export default HomeScreen