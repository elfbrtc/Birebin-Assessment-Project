import React, { useEffect, memo } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches, fetchMatchesSuccess } from '../actions/matchActions';
import {MatchesState} from '../types/matchesState';
import { generateMockData } from '../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import Icon from 'react-native-vector-icons/EvilIcons';


export interface MatchListProps {
  item: Match;
}

const MatchList: React.FC<MatchListProps> = ({item}) => {

  return (
    <View className=''>
      <View className='flex flex-row items-center justify-between m-2'>
        <View className='flex flex-row items-center '>
          <Icon name="star" size={20} color="#000" />
          <View className={`${item.mbs === 1 ? 'bg-red-400 rounded-md	ml-1' : 'bg-green-400 rounded-md ml-1'}`}>
            <Text className='text-white text-sm mx-1.5 font-semibold'>{item.mbs}</Text>
          </View>
          <Text className='ml-2'>{`${item.homeTeam} - ${item.awayTeam}`}</Text>
        </View>
        <Text className='text-red-600 text-xs'>{item.isLive ? 'Canlı' : ''}</Text>
      </View>
      <View className='flex flex-row bg-slate-200 p-1'>
        {
          item.bets[0].options.map((option) => (
            <View key={option.id}>
                <View className='flex flex-col items-center'>
                    <Text className='text-xs text-blue-600'>{option.optionNumber}</Text>
                    <Text className='border rounded px-2.5 py-1 mx-1 text-xs bg-white border-transparent'>{option.odd.toFixed(2)}</Text>
                </View>
            </View>
          ))
        }
        {
          item.bets[1].options.map((option) => (
            <View className='ml-2'key={option.id}>
            {
                option.name !== 'Gol' 
                ? 
                <View className='flex flex-col items-center'>
                  <Text className='text-xs text-blue-600'>{option.name}</Text>
                  <Text className='border rounded px-2.5 py-1 mx-1 text-xs bg-white border-transparent'>{option.odd.toFixed(2)}</Text>
                </View>
              : 
              <View className='flex flex-col items-center border rounded px-3 py-1 bg-gray-300 border-transparent'>
                <Text className='text-xs text-blue-600'>{option.name}</Text>
                <Text className='text-xs '>{option.odd}</Text>
              </View>
            }
            </View>
          ))
        }
      </View>

      <View className='flex flex-row items-center justify-between bg-slate-300'>
        
      </View>
    </View>
  );
};

export default memo(MatchList);
