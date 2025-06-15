# Hookshot 🚀

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg) ![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)

Welcome to **Hookshot**, a reliable webhook delivery service designed for backend systems that require robust asynchronous communication. With features like retry logic, exponential backoff, dead-letter queue (DLQ), and delivery tracking, Hookshot ensures that your webhooks are delivered efficiently and reliably.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [How It Works](#how-it-works)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

## Features

- **Reliable Delivery**: Ensures that webhooks are delivered even in case of temporary failures.
- **Retry Logic**: Automatically retries failed deliveries based on configurable settings.
- **Exponential Backoff**: Gradually increases the wait time between retries to avoid overwhelming the target server.
- **Dead-Letter Queue (DLQ)**: Stores failed messages for later inspection and reprocessing.
- **Delivery Tracking**: Monitor the status of each webhook delivery.
- **Built with Node.js**: Utilizes the power of Node.js for efficient handling of asynchronous operations.
- **Job Queue with BullMQ**: Leverages BullMQ for managing job queues effectively.
- **PostgreSQL Integration**: Uses PostgreSQL for reliable data storage.
- **Event-Driven Architecture**: Designed to fit seamlessly into event-driven systems.

## Getting Started

To get started with Hookshot, you can check the [Releases](https://github.com/jorgegg14/hookshot/releases) section for the latest version. Download the appropriate file, and follow the installation instructions below.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/jorgegg14/hookshot.git
   cd hookshot
   ```

2. **Install Dependencies**:

   Make sure you have Node.js and npm installed. Then, run:

   ```bash
   npm install
   ```

3. **Set Up the Database**:

   Ensure you have PostgreSQL running. Create a database for Hookshot and update the configuration accordingly.

4. **Run the Application**:

   You can start the application using:

   ```bash
   npm start
   ```

5. **Check the Status**:

   Monitor the application logs to ensure everything is running smoothly.

## Usage

Hookshot can be integrated into your existing systems to handle webhook deliveries. Here’s a basic example of how to send a webhook:

```javascript
const Hookshot = require('hookshot');

const hookshot = new Hookshot({
    db: {
        host: 'localhost',
        user: 'youruser',
        password: 'yourpassword',
        database: 'yourdatabase'
    }
});

hookshot.sendWebhook('https://example.com/webhook', { data: 'your data' })
    .then(response => {
        console.log('Webhook sent successfully:', response);
    })
    .catch(error => {
        console.error('Failed to send webhook:', error);
    });
```

## Configuration

Hookshot allows you to configure various settings to tailor the service to your needs. Here are some of the key configuration options:

- **Database Configuration**: Set the database connection parameters.
- **Retry Settings**: Configure the number of retries and the delay between attempts.
- **DLQ Settings**: Specify how long to retain failed messages in the dead-letter queue.

You can set these configurations in a `.env` file or directly in the code.

## How It Works

1. **Webhook Creation**: When you send a webhook, Hookshot creates a job in the BullMQ queue.
2. **Job Processing**: The job is processed by a worker that attempts to deliver the webhook.
3. **Delivery Attempt**: If the delivery fails, the worker will retry based on the configured settings.
4. **Success or Failure**: On success, the job is marked as completed. On failure, it is either retried or sent to the DLQ.
5. **Monitoring**: You can track the status of deliveries through the provided APIs.

## Contributing

We welcome contributions to Hookshot! If you have ideas for improvements or new features, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear messages.
4. Push your changes and submit a pull request.

Please ensure your code adheres to the project's coding standards and includes tests where applicable.

## License

Hookshot is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Links

For more information and updates, visit the [Releases](https://github.com/jorgegg14/hookshot/releases) section. You can find the latest version of Hookshot and download the necessary files to get started.

![Webhook Delivery](https://example.com/path/to/your/image.png)

Feel free to explore the code, report issues, and suggest improvements. Your feedback is valuable to us!