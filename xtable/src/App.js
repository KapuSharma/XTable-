import { useState } from 'react';
import './App.css';

function App() {
  const [data,setData]= useState(
    [
    
        { date: "2022-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-02", views: 150, article: "Article 2" },
    
        { date: "2023-09-02", views: 120, article: "Article 3" },
    
        { date: "2020-09-03", views: 200, article: "Article 4" }
    
    ]
    
    )
    const sortData = (args)=>{
      const sortedData= [...data].sort((a,b)=>{
        if(args==='data'){
          if(a.date===b.date){
            return b.views-a.views;
          }
          return new Date(b.date)-new Date(a.date);
        }else if(args==='views'){
          if(a.views===b.views){
            return  new Date(b.date)-new Date(a.date);
          }
          return b.views-a.views;
        }
        return 0;
      })
      setData(sortedData);
    }
  return (
    <div className="App">
     <h1>Date and Views Table</h1>

<button onClick={() => sortData('data')}>Sort by Date</button>

<button onClick={() => sortData('views')}>Sort by Views</button>

<table>

<thead>

  <tr>

   <th>Date</th>

   <th>Views</th>

   <th>Article</th>

  </tr>

 </thead>

 <tbody>

  {data.map((item, index) => (

   <tr key={index}>

     <td>{item.date}</td>

     <td>{item.views}</td>

     <td>{item.article}</td>

   </tr>

  ))}

 </tbody>

</table>
    </div>
  );
}

export default App;