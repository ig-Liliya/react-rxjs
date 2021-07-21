import {ofType,Epic } from 'redux-observable'
import {interval, merge, Observable} from 'rxjs'
import {delay, mapTo, switchMap} from "rxjs/operators";
import {NUM} from "./actions";

interface ActionIn {
  type: string,
  payload?: any
}

interface ActionOut {
  type: string,
  payload?: number
}

export const fetchGit:Epic<ActionIn, ActionOut> = ($action) => (
  $action.pipe(
    ofType('add'),
    switchMap(action => (
      merge().pipe(
        mapTo({
          type: NUM,
          payload: 1
        }),
        delay(500)
      )
    ))
  ))
