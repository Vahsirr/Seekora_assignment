# Search Results Page Assignment

This project is a responsive search results page built using **Next.js**. It displays mock search results with filters, autosuggestions, and responsive design.

## Features

- Responsive grid layout (1 column on mobile, 3+ on desktop)
- Tag filters (as chips/buttons)
- Autosuggest dropdown based on input
- Combined filtering (query + tag)
- Loading spinner (1s delay simulated)
- "No results found" message
- Clean and modern UI with Tailwind CSS

## Tech Stack

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS
- **Icons:** react-icons

## How to Run Locally

 **Clone the repository**
   ```bash
   git clone https://github.com/Vahsirr/Seekora_assignment.git
   cd Seekora_assignment

   npm install

   npm run dev
```
## How It Works

- The /search page fetches mock data from a static array.
- User can filter results using:
  - Tag filters
  - Text input with autosuggestions
- All filters are applied in a useEffect on pressing enter or selecting any suggestion, simulating async search behavior.
- A loading spinner appears for 1 second to mimic real-world delay.
- Tag filtering supports one tag at a time, and a "Clear Filters" option appears after selection.
