import React from 'react'
import { useState } from 'react'

import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')


    function addCount() {
        setCount(count + 1)
    }
    function removeCount() {
        setCount(count + 1)
    }

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button
                        className="btn"
                        type="button"
                        onClick={() => setCount(count - 1)}
                    >
                        -1
                    </button>
                    <button
                        className="btn"
                        type="buttom"
                        onClick={removeCount}
                    >
                        +1
                    </button>
                    <button
                        className="btn"
                        type="buttom"
                        onClick={() => setCount(currentValue => currentValue + 100)}
                    >
                        +100
                    </button>
                </div>
            </div>

            <SectionTitle title="Exercicio #01"/>
            <span className="text">{name}</span>
            <input
                type="text"
                className="input"
                // value={name}
                onChange={(e) => setName(e.target.value)}
            />

        </div>
    )
}

export default UseState
