import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const eventInfo = [
  {
    title: 'Lịch trình',
    events: [
      { title: 'Giờ điểm', content: 'Hồ Tràm, Vũng Tàu' },
      { title: 'Thời gian', content: '09:00 AM - 12:00 AM, 12/12/2024' },
      { title: 'Phương tiện di chuyển', content: 'Xe bus' },
      { title: 'Thời gian di chuyển', content: '21:00 - 22:00' },
    ],
  },
  {
    title: 'Khách sạn',
    events: [
      { title: 'Tên khách sạn', content: 'Hồng Quỳnh' },
      { title: 'Giờ nhận phòng', content: '06:00 AM - 12:00 AM' },
      { title: 'Địa điểm', content: '234 Quang Trung, Hồ Chí Minh' },
    ],
  },
];


const renderChild = ({ title, content }, index) => {
  return (
    <View key={index.toString()} style={styles.childContainer}>
      <Text style={styles.childTitle}>{title}</Text>
      <Text style={styles.childContent}>{content}</Text>
    </View>
  );
};


const renderSection = ({ title, events }, index) => {
  return (
    <View key={index.toString()} style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionBody}>
        {events.map((event, index) => renderChild(event, index))}
      </View>
    </View>
  );
};

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {eventInfo.map((section, index) => renderSection(section, index))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    backgroundColor: '#f0f0f0',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionBody: {
    marginLeft: 10,
  },
  childContainer: {
    marginBottom: 5,
  },
  childTitle: {
    fontWeight: 'bold',
  },
  childContent: {
    marginLeft: 10,
  },
});

export default App;
