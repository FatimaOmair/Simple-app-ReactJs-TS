import './index.scss';
import { X } from 'lucide-react';
import { ReactNode } from 'react';
import { AlertTypes } from '../../../types';


interface IProps{
  type:AlertTypes;
  icon:ReactNode;
  title:string;
  description?:string;
  children?:ReactNode;
    
}
export default function Alerts(props:IProps) {
  const {type="alert-danger",icon,title,description,children} =props;
    
  return (
    <div className={type} style={{ margin:"1.5rem" }}>
      <div className='alert-header'>
      <div className='alert-title'>
      <span>{icon}</span>
      <h4>{ title}</h4>
      </div>
      <X className='close' size={20}/>
      </div>
     
      {children?children: <p> {description}</p>}
      
    </div>
  )
}