import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CalendarIcon, Clock, MapPin } from "lucide-react";

interface Event {
  date: Date;
  title: string;
  time: string;
  location: string;
  description: string;
}

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Sample events
  const events: Event[] = [
    {
      date: new Date(2025, 10, 7), // November 7, 2025
      title: "Community Food Drive",
      time: "9:00 AM - 2:00 PM",
      location: "Main Distribution Center",
      description: "Join us for our monthly community food drive. Bring donations or volunteer to help sort and distribute food to families in need.",
    },
    {
      date: new Date(2025, 10, 14), // November 14, 2025
      title: "Volunteer Orientation",
      time: "6:00 PM - 7:30 PM",
      location: "Community Room",
      description: "New volunteer orientation session. Learn about our mission, meet the team, and find out how you can make a difference.",
    },
    {
      date: new Date(2025, 10, 21), // November 21, 2025
      title: "Thanksgiving Food Distribution",
      time: "8:00 AM - 12:00 PM",
      location: "Main Distribution Center",
      description: "Special Thanksgiving food box distribution. Includes turkey, vegetables, and all the fixings for a complete holiday meal.",
    },
    {
      date: new Date(2025, 10, 28), // November 28, 2025
      title: "Monthly Board Meeting",
      time: "5:00 PM - 7:00 PM",
      location: "Administrative Office",
      description: "Regular monthly board meeting to discuss operations, funding, and community outreach initiatives.",
    },
  ];

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    setSelectedDate(date);
    const dateEvents = getEventsForDate(date);
    if (dateEvents.length > 0) {
      setSelectedEvent(dateEvents[0]);
      setIsDialogOpen(true);
    }
  };

  const eventDates = events.map((event) => event.date);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events Calendar</h1>
            <p className="text-lg text-muted-foreground">
              Stay updated on our upcoming food distributions, volunteer opportunities, and community events
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendar */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  Select a Date
                </CardTitle>
                <CardDescription>Click on highlighted dates to view event details</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  className="rounded-md border"
                  modifiers={{
                    event: eventDates,
                  }}
                  modifiersStyles={{
                    event: {
                      fontWeight: "bold",
                      textDecoration: "underline",
                      color: "hsl(var(--primary))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            {/* Upcoming Events List */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <Card
                    key={index}
                    className="border-2 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => {
                      setSelectedEvent(event);
                      setIsDialogOpen(true);
                    }}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <CardDescription>
                        {event.date.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedEvent.title}</DialogTitle>
                <DialogDescription>
                  {selectedEvent.date.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium">{selectedEvent.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-medium">{selectedEvent.location}</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm leading-relaxed">{selectedEvent.description}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CalendarPage;
