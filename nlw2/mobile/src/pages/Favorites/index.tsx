import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';
import {useFocusEffect} from '@react-navigation/native';

import styles from './styles';

function Favorites(){
    const [favorites, setFavorites] = useState([]);

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if (response){
                const favoritedTeachers = JSON.parse(response);

                setFavorites(favoritedTeachers);
            }
        })
    }

    // useEffect(() => {
    //     loadFavorites();
    // }, [])

    //Trocado por FocusEffect porque utilizando tab navigation, o componente não é atualizado até que
    //se dê um reload na página. Com focus, sempre que o foco passar para o componente, executa a função abaixo.
    useFocusEffect(() => {
        loadFavorites();
    })

    return (
        <View style={styles.container}>
            <PageHeader title='Meus Proffys favoritos' />

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 16}}
            >
                {favorites.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} favorited={true} />
                })}
            </ScrollView>
        </View>
    );
}

export default Favorites;