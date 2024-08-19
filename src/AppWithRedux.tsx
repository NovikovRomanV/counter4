import React from 'react';
import './App.css';
import {Input} from "./components/Input";
import {Button} from "./components/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/Store";
import {
    countButtonAC,
    restButtonAC,
    setCountValueAC,
    setInputMaxAC,
    setInputMinAC,
} from "./state/CountReducer";


function AppWithRedux() {

    const count = useSelector<AppRootStateType, number>(state => state.count.count)
    const minValue = useSelector<AppRootStateType, number>(state => state.count.minValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.count.maxValue)
    const dispatch = useDispatch()

    const set = () => {
        dispatch(setInputMaxAC(maxValue))
        dispatch(setInputMinAC(minValue))
        dispatch(setCountValueAC(minValue))
    }

    const setInputMax = (value: number) => {
        dispatch(setInputMaxAC(value))
    }
    const setInputMin = (value: number) => {
        dispatch(setInputMinAC(value))
    }
    const countButton = () => {
        if (maxValue) {
            if (count < maxValue) {
                dispatch(countButtonAC(1))
            }
        }
    }
    const restButton = () => {
            dispatch(restButtonAC())
    }

    let spanText = maxValue < 1 || minValue < 0 || maxValue < minValue ?'Incorrect value':count
    let spanCountClass = () => {
        if(maxValue < 1 || minValue < 0 || maxValue < minValue){return 'spanCount spanRed'}
        if(count===maxValue){return 'spanCount spanRed'}
        else{return 'spanCount'}
    }

    return (
        <div className="App">
            <div className='section'>
                <div className='box_inputs'>
                    <section className='box_section_input'>
                        <span className='span'>MAX VALUE:</span>
                        <Input type={'number'}
                               value={maxValue}
                               setInput={setInputMax}
                               classNameInput={maxValue < 1||maxValue<minValue?'input':''}
                        />
                    </section>
                    <section className='box_section_input'>
                        <span className='span'>MIN VALUE:</span>
                        <Input type={'number'}
                               value={minValue}
                               setInput={setInputMin}
                               classNameInput={minValue<0||minValue>maxValue?'input':''}
                        />
                    </section>
                </div>
                <div>
                    <Button classNameButton={'button'} name={'SET'} collBack={set}/>
                </div>
            </div>
            <div className='section'>
                <span className={spanCountClass()}>{spanText}</span>
                <div className='box_Button'>
                    <Button classNameButton={count===maxValue?'buttonDisabled':'button'} name={'INC'} collBack={countButton}/>
                    <Button classNameButton={count===minValue?'buttonDisabled':'button'} name={'RES'} collBack={restButton}/>
                </div>
            </div>
        </div>
    );
}

export default AppWithRedux;
