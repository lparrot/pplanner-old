import { ActionTree, GetterTree, MutationTree } from 'vuex'

/**
 * State
 */
export const state = () => ({
	task: null,
	status: null,
	statusList: [],
})

export type RootState = ReturnType<typeof state>

/**
 * Getters
 */
export const getters: GetterTree<RootState, RootState> = {}


/**
 * Mutations
 */
export const mutations: MutationTree<RootState> = {
	SET_TASK (state, task) {
		state.task = task
	},
	SET_STATUS (state, status) {
		state.status = status
	},
	SET_STATUS_LIST (state, statusList) {
		state.statusList = statusList
	},
}

/**
 * Actions
 */
export const actions: ActionTree<RootState, RootState> = {
	async findStatusListByItemId ({ commit }, itemId) {
		const statusList = await this.$api.task_status.findStatusByItemId(itemId)
		statusList.unshift({ name: 'Sans statut', color: 'bg-warn text-white' })
		commit('SET_STATUS_LIST', statusList)
	},

	async selectStatus ({ commit }, status) {
		commit('SET_STATUS', status)
	},
}
