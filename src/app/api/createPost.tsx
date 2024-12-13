

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        // Destructure the incoming request body
        const { name, data } = req.body;
  
        // Check if the required fields are present
        if (!name || !data || !data.year || !data.price) {
          return res.status(400).json({ message: 'Missing required fields' });
        }
  
        // Make the API request to the external endpoint
        const apiResponse = await fetch('https://api.restful-api.dev/objects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            data,
          }),
        });
  
        const apiData = await apiResponse.json();
  
        // Check if the API responded with a successful status
        if (apiResponse.ok) {
          return res.status(200).json({
            message: 'Post created successfully!',
            data: apiData,
          });
        } else {
          return res.status(apiResponse.status).json({
            message: apiData.message || 'Something went wrong with the external API.',
          });
        }
      } catch (error) {
        return res.status(500).json({
          message: 'Something went wrong while processing your request.',
          error: error.message,
        });
      }
    } else {
      // Method Not Allowed if the HTTP method is not POST
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  