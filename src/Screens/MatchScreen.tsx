import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button, ListRenderItem, SafeAreaView, VirtualizedList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches } from '../Actions/matchActions';
import { MatchesState } from '../types/matchesState';
import { RootState } from '../reducers/rootReducer';
import MatchList from '../Components/MatchList';
import { MatchListProps } from '../Components/MatchList';

const MatchScreen: React.FC = () => {
    const dispatch = useDispatch();
    const { matches, loading, error} = useSelector((state: RootState) => state.matches);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const PAGE_SIZE = 20;
    useEffect(() => {
        dispatch(fetchMatches(currentPage, PAGE_SIZE)); 

    }, [dispatch, currentPage]);
  
    const loadMoreData = () => {
      if((currentPage - 1) * PAGE_SIZE !== 5000){
        dispatch(fetchMatches(currentPage + 1, PAGE_SIZE));
        setCurrentPage((prevPage) => prevPage + 1); 
      }
    };

    const renderItem = ({ item } : MatchListProps) => {
      return <MatchList item={item} />;
    };;


    const renderFooter = () => {
      if (!loading) return null;
  
      return (
        <View style={{ paddingVertical: 20 }}>
          <ActivityIndicator animating size="large" />
        </View>
      );
    };
  
    return (
      <SafeAreaView>
        <View>
          <FlatList
            data={matches}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            onEndReachedThreshold={0.9}
            onEndReached={loadMoreData}
            ListFooterComponent={renderFooter}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default MatchScreen;