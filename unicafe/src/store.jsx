import { create } from 'zustand'
import { useShallow } from "zustand/react/shallow"


const useCounterStore = create( set => ({
    good: 0,
    bad: 0,
    neutral: 0,
    actions: {
        increaseGood: () => set (state => ({
            good : state.good + 1,
        })),
        increaseBad: () => set (state => ({
            bad : state.bad + 1,
        })),
        increaseNeutral: () => set (state => ({
            neutral : state.neutral + 1,
        }))
    }
}))


export const useCounters = () =>
    useCounterStore (
    useShallow( (state) => ({
        good: state.good,
        bad: state.bad,
        neutral: state.neutral
    }))
)

export const useCounterActions = () => useCounterStore( state => state.actions)
