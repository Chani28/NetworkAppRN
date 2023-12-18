// realmTry.tsx
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios, { AxiosResponse } from 'axios';
import realm from '../RealmSchema';

interface Network {
  id: number;
  code: string;
  name: string;
  top_groups_name: string;
  group_name: string;
  area_name: string;
  group_color: string;
  group_text_color: string;
  type_name: string;
  area_id: number;
  top_group_id: number;
  sort: number;
}

interface Area {
  id: number;
  name: string;
  top_group_id: number;
  top_group_name: string;
}

interface TopGroup {
  id: number;
  name: string;
  color: string;
  text_color: string;
  HasAreas: boolean;
  sort: number;
}

const realmTry: React.FC = () => {
  useEffect(() => {
    const fetchDataAndStoreInRealm = async () => {
      try {
        // Fetch data from your API
        const response: AxiosResponse = await axios.get('your_api_endpoint');

        // Extract data from the response
        const { Networks, Areas, TopGroup } = response.data;

        // Write data to Realm
        realm.write(() => {
          Networks.forEach((network: Network) => {
            realm.create('Network', network, true);
          });

          Areas.forEach((area: Area) => {
            realm.create('Area', area, true);
          });

          TopGroup.forEach((topGroup: TopGroup) => {
            realm.create('TopGroup', topGroup, true);
          });
        });
      } catch (error) {
        console.error('Error fetching and storing data:', error);
      }
    };

    // Call the function when the component mounts
    fetchDataAndStoreInRealm();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <View>
      <Text>Data fetched and stored in Realm!</Text>
      {/* Add other UI components */}
    </View>
  );
};

export default realmTry;