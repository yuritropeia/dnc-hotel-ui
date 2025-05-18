import { Reservation } from "@/types/Reservation";
import Image from "next/image";
import Link from "next/link";
import DetailRow from "./DetailRow";
import { getFormattedDate } from "@/helpers/format/date";
import { getFormattedStatus } from "@/helpers/format/dictionary/status";

type DetailListItemProps = {
  reservation: Reservation;
};

const DetailListItem = ({ reservation }: DetailListItemProps) => {
  return (
    <Link
      href={`/reservas/${reservation.id}`}
      className="flex w-full mt-5 md:mt-0"
    >
      <Image
        src={reservation.hotel.image ?? "/no-hotel.jpg"}
        alt={`Foto do hotel ${reservation.hotel.name}`}
        width={300}
        height={300}
        className="rounded-lg w-32 h-32 object-cover"
      />
      <div className="w-full flex flex-col justify-between ml-4">
        <b>{reservation.hotel.name}</b>
        <div>
          <DetailRow
            title="Status"
            description={getFormattedStatus(reservation.status)}
            className="mt-1"
          />
          <DetailRow
            title="Check-in"
            description={getFormattedDate(reservation.checkIn)}
            className="mt-1"
          />
          <DetailRow
            title="Check-out"
            description={getFormattedDate(reservation.checkOut)}
            className="mt-1"
          />
        </div>
      </div>
    </Link>
  );
};

export default DetailListItem;
