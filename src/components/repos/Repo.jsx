import RepoItem from "./RepoItem"

function Repo({repos}){

    const newRepo = repos.map((repo)=>{
        return <RepoItem key={repo.id} repo={repo}/>
    })
    return(
        <div>
            {newRepo}
        </div>
    )
}

export default Repo