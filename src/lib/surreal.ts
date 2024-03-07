import { cookies } from 'next/headers'

export async function surrealAuthQuerry(query: string){
    const token = cookies().get('token');
    if(token){
        const url = process.env.NEXT_BACKEND_URL + '/sql';

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
                'Accept': 'application/json',
                'NS': "todo",
                'DB': "todo",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: query
        });

        if (response.status === 401){
            throw new Error('Not authenticated');
        }
    }else{
        throw new Error('Not authenticated');
    }
}

export async function surrealQuerry(query: string){
    const url = process.env.NEXT_BACKEND_URL + '/sql';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
            'Accept': 'application/json',
            'NS': "todo",
            'DB': "todo"
        },
        body: query
    });

    if (response.status === 401){
        throw new Error('Not authenticated');
    }
}

export async function surrealSignup(email:string, password:string, firstName:string, lastName:string){
    const url = process.env.NEXT_BACKEND_URL + '/signup';
    const body = JSON.stringify(
        {
            ns: "todo",
            db: "todo",
            sc: "account",
            email: email,
            pass: password,
            firstName: firstName,
            lastName: lastName
        }
    );

    console.log("body",body);
    console.log("url",url);
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: body
    });

    if(response.status === 200){
        //set cookie
        const data = await response.json();
        const token = data?.token;
        if(token){
            cookies().set('token', token, {
                httpOnly: true,
                sameSite: 'lax',
                maxAge: 60 * 60 * 24,
            });
        }
    }
    return response;
}

export async function surrealSignin(email:string, password:string){
    const url = process.env.NEXT_BACKEND_URL + '/signin';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(
                {
                    ns: "todo",
                    db: "todo",
                    sc: "account",
                    email: email,
                    pass: password,
                }
            )
    });
    if(response.status === 200){
        //set cookie
        const data = await response.json();
        const token = data?.token;
        if(token){
            cookies().set('token', token, {
                httpOnly: true,
                sameSite: 'lax',
                maxAge: 60 * 60 * 24,
            });
        }
    }
    return response;
}