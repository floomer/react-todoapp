import React, { useState } from 'react'
import './app.css'
import { ResponsiveAppBar } from './components/ui/ResponsiveAppBar'
import { WorkspaceDesk } from './components/WorkspaceDesk'
import { AddButton } from './components/ui/button/AddButton'
import { MyModal } from './components/ui/modal/MyModal'
import { Provider } from 'react-redux'
import { store } from './store'

export function App() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')

    return (
        <Provider store={store}>
            <div className="App">
                <ResponsiveAppBar />
                {value ? (
                    <WorkspaceDesk value={value} />
                ) : (
                    <AddButton
                        variant={'outlined'}
                        buttonName={'Add a Workspace'}
                        onClick={() => {
                            setOpen(true)
                        }}
                    />
                )}
                <MyModal
                    setValue={setValue}
                    open={open}
                    value={value}
                    onClose={() => setOpen(false)}
                />
            </div>
        </Provider>
    )
}
