import React,{ useContext, useState} from 'react';
import styles from './Nav.module.css';
import UserContext from '../../context/UserContext';
import DataContext from '../../context/DataContext';
import AddBtn from './Add/AddBtn';
import ResultsContainer from './ResultsContainer/ResultsContainer';
import ArrayHelpers from '../../helpers/Arrayhelpers'

export default (props)=>{
    const {user, logout, userInfo, setUserInfo} = useContext(UserContext);
    const {data} = useContext(DataContext);
    const [search, setSearch] = useState('');
    const [filterSkill, setFilterSkill] = useState('all');
    const [filterSection, setFilterSection] = useState('all');
    
    const options = ArrayHelpers
        .removeDuplicates(data.map(x=>x.skill))
        .map(s=>(
            <option value={s}>{s}</option>
        ));

    const loggingOut = ()=>{
        logout();
        setUserInfo(null);
    }
    
    const sections = ArrayHelpers
        .removeDuplicates(data
            .filter(s=>s.skill===filterSkill)
            .map(s=>s.section)
        )
        .map(s=><option value={s}>{s}</option>);

    return (
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <h1>Code Snippets</h1>
                <form className={styles.Search}>
                    <input 
                        type="text" 
                        placeholder="What do you want to find?..."
                        onChange={(e)=> setSearch(e.target.value)}
                        value={search}
                    ></input>
                    <select 
                        onChange={(e)=>setFilterSkill(e.target.value)}
                    >
                        <option value="all">All</option>
                        {options}
                    </select>
                    <select 
                        onChange={(e)=>setFilterSection(e.target.value)} 
                        disabled={filterSkill==='all'}
                    >
                        {filterSkill==='all' && <option>Section</option>}
                        {filterSkill!=='all' && <option value="all">All</option>}
                        {filterSkill!=='all' && sections}
                    </select>
                    {search !== '' && <ResultsContainer 
                        filterSkill={filterSkill} 
                        filterSection={filterSection}
                        search={search}
                        setSearch={setSearch}
                    />}
                </form>
                {!user ? 
                    <button onClick={props.setModal} className={styles.Auth}>Login</button> :
                    <button onClick={loggingOut} className={styles.Auth}>Logout</button>
                }
                {userInfo && <AddBtn userInfo={userInfo}/>}
            </nav>
        </header>
    );
}
