export default function SignupAction(state,action){
	switch(action.type){
		case 'signup' :
			return action.result;
		default:
			return []
	}
}