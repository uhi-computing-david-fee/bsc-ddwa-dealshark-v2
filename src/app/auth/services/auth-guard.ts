import { CanActivateFn, Router } from "@angular/router";
import { supabase } from "./supabase.client";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = async () => {

    const router = inject(Router);

    // wait for auth to be resolved
    const { data } = await supabase.auth.getSession();

    // determine auth state 
    if (data.session) {
        return true; // auth guard proceeds
    }

    // no session re-direct and return false
    router.navigate(['/login']);
    return false; 


}