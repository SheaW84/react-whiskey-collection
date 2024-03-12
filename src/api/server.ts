
const token = 'c8b10250abb8cd0afead2ecab17a4646e91cbc922a16db0f'

export const server_calls = {
    get: async () => {
        const response = await fetch (`https://whiskeycollection1.onrender.com/api/whiskeys`,
        {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if(!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {})=>{
        const response = await fetch(`https://whiskeycollection1.onrender.com/api/whiskeys`,
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if(!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },
    
    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://whiskeycollection1.onrender.com/api/whiskeys/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on Server')
        }
        
        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://whiskeycollection1.onrender.com/api/whiskeys/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        })

        if (!response.ok){
            throw new Error('Failed to delete data on Server')
        }
        
        return;

    }
    
    
}