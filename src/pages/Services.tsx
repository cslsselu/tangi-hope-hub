import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Users, Link as LinkIcon } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Food Box Distribution",
      description: "Nutritious food boxes with fresh produce, proteins, grains, and pantry staples.",
    },
    {
      icon: Users,
      title: "Family Support",
      description: "Personalized assistance for families, seniors, and individuals with special needs.",
    },
    {
      icon: LinkIcon,
      title: "Local Resources",
      description: "Connections to healthcare, employment, housing, and educational programs.",
    },
  ];

  const schedule = [
    { day: "Monday", time: "9:00 AM - 12:00 PM", type: "General" },
    { day: "Wednesday", time: "2:00 PM - 5:00 PM", type: "General" },
    { day: "Thursday", time: "9:00 AM - 12:00 PM", type: "Seniors" },
    { day: "Friday", time: "9:00 AM - 3:00 PM", type: "General" },
    { day: "Saturday", time: "8:00 AM - 11:00 AM", type: "Families" },
  ];

  return (
    <div className="bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Schedule & Food of Month */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Schedule */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl">Distribution Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead className="border-b border-border">
                  <tr>
                    <th className="text-left py-2">Day</th>
                    <th className="text-left py-2">Hours</th>
                    <th className="text-left py-2">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-2 font-medium">{item.day}</td>
                      <td className="py-2 text-muted-foreground">{item.time}</td>
                      <td className="py-2 text-muted-foreground">{item.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-muted-foreground mt-3">
                Bring valid ID and proof of residence
              </p>
            </CardContent>
          </Card>

          {/* Food of Month */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl">Food of the Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary/20 rounded-lg p-4 mb-3">
                <h3 className="font-semibold text-lg mb-1">November: Canned Vegetables</h3>
                <p className="text-sm text-muted-foreground">
                  Help us stock shelves with nutritious canned vegetables
                </p>
              </div>
              <div className="space-y-1 text-sm">
                <p className="font-medium mb-1">Most Needed:</p>
                <ul className="space-y-0.5 text-muted-foreground">
                  <li>• Green beans</li>
                  <li>• Corn</li>
                  <li>• Mixed vegetables</li>
                  <li>• Tomatoes</li>
                  <li>• Peas</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
