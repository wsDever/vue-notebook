import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	notes:[],
	curNote:{},
	len:0,
	bh:0
}

const mutations = {
	ADD_NOTE(state){
		const newNote = {
			title:"笔记" + state.bh ,
			content:'',
			favorite:false
		}
		state.notes.push(newNote) ;
		// state.curNote = newNote ;
		state.len ++ ;
		state.bh ++ ;
	},
	EDIT_NOTE_CON(state,content){
		state.curNote.content = content ;
	},
	EDIT_NOTE_TLE(state,title){
		state.curNote.title = title ;
	},
	SET_CURRENT_NOTE(state,note){
		state.curNote = note ;
	},
	TOGGLE_FAVORITE(state){
		state.curNote.favorite = !state.curNote.favorite;
	},
	DELETE_NOTE(state){
		let j = 0 ;
		for(var i=0;i<state.notes.length;i++){
			if(state.notes[i] == state.curNote){
				state.notes.splice(i,1);
				j = i == 0 ? 0 : i - 1 ;
				state.len -- ;
			}
		}
		if(state.len > 0)
			state.curNote = state.notes[ j ];
		else
			return ;
	}
}
const actions = {
	addNote({commit}){
		commit("ADD_NOTE");
	},
	editNoteContent({commit},content){
		commit("EDIT_NOTE_CON",content);
	},
	editNoteTitle({commit},title){
		commit("EDIT_NOTE_TLE",title);
	},
	updateCurNote({commit},note){
		commit("SET_CURRENT_NOTE",note);
	},
	toggleFavorite({commit}){
		commit("TOGGLE_FAVORITE");
	},
	deleteNote({commit}){
		commit("DELETE_NOTE");
	}
}
const getters = {
	notes:state => state.notes,
	curNote:state => state.curNote
}
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})