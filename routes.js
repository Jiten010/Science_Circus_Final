app.post('/api/register', async (req, res) => {
  try {
    console.log('Received registration request:', req.body);

    const {
      event_id,
      name,
      email,
      phone,
      teamName,
      player1,
      player2,
      player3
    } = req.body;

    if (!event_id || !email) {
      console.log('Validation failed: Missing required fields');
      return res.status(400).json({ message: 'Event ID and Email are required' });
    }

    // Build registration object dynamically
    const registration = {
      event_id,
      email,
      phone: phone || null,
      created_at: new Date().toISOString()
    };

    if (event_id === 'Treasure Hunt') {
      if (!name) return res.status(400).json({ message: 'Name is required for Treasure Hunt' });
      registration.name = name;
    } else if (event_id === 'Quiz') {
      if (!teamName || !player1 || !player2)
        return res.status(400).json({ message: 'Team name, Player 1 and Player 2 are required for Quiz' });
      registration.teamName = teamName;
      registration.player1 = player1;
      registration.player2 = player2;
    } else if (event_id === 'Survival Quest') {
      if (!teamName || !player1 || !player2 || !player3)
        return res.status(400).json({ message: 'All 3 player names and team name are required for Survival Quest' });
      registration.teamName = teamName;
      registration.player1 = player1;
      registration.player2 = player2;
      registration.player3 = player3;
    } else {
      return res.status(400).json({ message: 'Invalid event_id' });
    }

    console.log('Saving registration to MongoDB:', registration);
    const result = await db.collection('registrations').insertOne(registration);
    console.log('Registration saved successfully:', result.insertedId);
    res.status(200).json({ message: 'Successfully registered!' });

  } catch (error) {
    console.error('Error saving registration:', error);
    res.status(500).json({ message: 'Error registering for event' });
  }
});
