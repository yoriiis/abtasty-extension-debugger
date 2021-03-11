/**
 * Data manager for ABTasty data
 */

import { Data, TestsSortedByStatus, TargetingsSortedByStatus } from 'shared/assets/interfaces/interfaces'

export default class DataManager {
	/**
	 * Get tests sorted by status (accepted or not)
	 * @returns {Object} Sorted tests
	 */
	getTestsSortedByStatus(data: Data): TestsSortedByStatus {
		return {
			accepted: Object.keys(data.results)
				.filter((id: string) => data.results[id].status === 'accepted')
				.map((id: string) => {
					data.results[id].key = id
					return data.results[id]
				}),
			rejected: Object.keys(data.results)
				.filter((id: string) => data.results[id].status !== 'accepted')
				.map((id: string) => {
					data.results[id].key = id
					return data.results[id]
				})
		}
	}

	/**
	 * Get targetings sorted by status (success or not)
	 * @returns {Object} Sorted targetings
	 */
	getTargetingsSortedByStatus(data: Data): TargetingsSortedByStatus {
		const outputData:TargetingsSortedByStatus = {}
		Object.keys(data.results).forEach((id: string) => {
			const targetings = data.results[id].targetings
			const acceptedTargetPages = Object.keys(targetings.targetPages)
				.filter((targetingKey: string) => targetings.targetPages[targetingKey].success === true)
				.map((targetingKey) => {
					targetings.targetPages[targetingKey].key = targetingKey
					return targetings.targetPages[targetingKey]
				})
			const acceptedQaParameters = Object.keys(targetings.qaParameters)
				.filter((targetingKey: string) => targetings.qaParameters[targetingKey].success === true)
				.map((targetingKey) => {
					targetings.qaParameters[targetingKey].key = targetingKey
					return targetings.qaParameters[targetingKey]
				})
			const rejectedTargetPages = Object.keys(targetings.targetPages)
				.filter((targetingKey: string) => targetings.targetPages[targetingKey].success === false)
				.map((targetingKey) => {
					targetings.targetPages[targetingKey].key = targetingKey
					return targetings.targetPages[targetingKey]
				})
			const rejectedQaParameters = Object.keys(targetings.qaParameters)
				.filter((targetingKey: string) => targetings.qaParameters[targetingKey].success === false)
				.map((targetingKey) => {
					targetings.qaParameters[targetingKey].key = targetingKey
					return targetings.qaParameters[targetingKey]
				})

			outputData[id] = {
				accepted: [...acceptedTargetPages, ...acceptedQaParameters],
				rejected: [...rejectedTargetPages, ...rejectedQaParameters]
			}
		})

		return outputData
	}
}
