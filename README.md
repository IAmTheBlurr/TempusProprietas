# Tempus Proprietas

**Tempus Proprietas** ("Time Ownership" in Latin) is a modern implementation of Brian Tracy's ABC123 method for task prioritization, enhanced specifically for Large Language Models (LLMs).

This web application helps users take control of their time by providing an AI-powered framework that categorizes and prioritizes tasks based on importance and urgency. The result is a clear, actionable roadmap that ensures focus on high-impact activities.

## Motivation

Time management is a universal challenge in today's fast-paced world. While proven methodologies like Brian Tracy's ABC123 method exist, they remain underutilized for several reasons:

- **Complexity**: Effective prioritization requires nuanced decision-making
- **Consistency**: Manual prioritization is subjective and often inconsistent
- **Accessibility**: Advanced time management techniques have a learning curve

These challenges inspired the creation of Tempus Proprietas—a framework that democratizes time mastery by embedding prioritization intelligence into LLMs. By harnessing the analytical capabilities of AI, we can bring the power of the ABC method to everyone, making expert-level time management accessible and consistent.

### **_As Brian Tracy Himself Conveys_**
> "The ABC Method is a powerful priority setting technique that you can use every single day. This technique is so simple and effective that it can, all by itself, make you one of the most efficient and effective people in your field."

## Purpose

Tempus Proprietas serves as a bridge between human-inspired methodology and AI capability. Its core purpose is to:

1. **Transform chaos into clarity**: Convert unstructured task lists into prioritized action plans
2. **Empower intentional time use**: Help users focus on what truly matters
3. **Adapt to individual contexts**: Provide personalized prioritization based on specific scenarios
4. **Simplify complex decisions**: Apply consistent prioritization logic to reduce decision fatigue

The framework enables LLMs to analyze tasks, understand their significance and urgency, and output structured plans that ensure focus on high-impact activities.

## Features

- **Task Prioritization**: Uses A, B, C, D, E categories with numerical ordering (A1, A2, B1, etc.)
- **Context-Aware Analysis**: Interprets importance and urgency from task descriptions
- **Actionable Output**: Delivers clear, prioritized task lists with rationales
- **Responsive Design**: Works across desktop and mobile devices
- **Dark/Light Mode**: Supports different visual preferences

## Installation

### Prerequisites

- Node.js 20+
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/tempusproprietas.git
cd tempusproprietas

# Install dependencies
npm install

# Start the development server
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Building for Production

```bash
npm run build
```

### Docker Deployment

The project includes Docker configuration for easy deployment:

```bash
# Build the Docker image
docker build -t tempusproprietas .

# Run the container
docker run -p 3000:3000 tempusproprietas
```

## Usage

1. Access the application through your web browser
2. Enter your tasks in natural language
3. The system will analyze and categorize them using the ABC method
4. Review your prioritized task list and follow the recommended sequence

## Technology Stack

- **Frontend**: React 19 with React Router 7
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Containerization**: Docker

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Brian Tracy for the original ABC123 methodology
- The React Router team for the excellent framework